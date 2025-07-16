<template>
  <div class="main-container">
    <div class="Layout_leaf">
      <textarea 
        id="ask" 
        rows="5" 
        cols="50" 
        :placeholder="placeholder"
        v-model="question"
      ></textarea>
      <div class="buttonFlex">
        <button @click="askAi" id="sendButton" :disabled="!sendOk">{{ sendOk ? "发送" : "发送中..." }}</button>
        <button @click="save" class="saveButton">保存</button>
      </div>
      
      <hr>
      <h6>{{ AITitle }}</h6>
      
      <div id="answer" v-html="answer"></div>
      <loading v-if="!sendOk"></loading>
    </div>
    
    <div class="Layout_right">
      <ul>
        <li v-for="item in histroys" :key="item" @click="showH(item)">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import loading from '../components/loading.vue';
import { useInfoStore } from '../store/infoStore';
import { showHistory, loadHistory } from "../common/js/Histroy";

const question = ref('');
const answer = ref('');
const sendOk = ref(true);
const histroys = ref([]);

const props = defineProps({
  placeholder: { type: String, default: "请输入问题" },
  AITitle: { type: String, default: "AI问答" },
  StartC: { type: String, default: "Q" },
  AIcontent: { type: String, default: "You are a helpful assistant." }
});

const sendTrun = () => {
  sendOk.value = !sendOk.value;
};

function save() {
  if (question.value !== "" && answer.value !== "") {
    localStorage.setItem(props.StartC + "-" + question.value, answer.value);
  }
}

const showH = (item) => {
  answer.value = showHistory(props.StartC, item);
};

onMounted(() => {
  histroys.value = loadHistory(props.StartC);
});

function askAi() {
  sendTrun();
  const store = useInfoStore();
  answer.value = "";
  fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer sk-e0f57017f2484dfeb703bc4b866e0d2e",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "qwen-plus",
      messages: [
        {
          role: "system",
          content: props.AIcontent
        },
        {
          role: "user",
          content: question.value
        }
      ]
    })
  })
    .then(response => response.json())
    .then(data => {
      answer.value = marked.parse(data.choices[0].message.content);
      let tokens = data.usage.total_tokens;
      store.addQue();
      store.addToken(tokens);
    })
    .finally(() => {
      sendTrun();
    });
}
</script>

<style scoped>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  color: #333;
  padding-top: 50px; /* 添加顶部间距，避免内容与状态栏或顶部元素冲突 */
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  gap: 20px; /* 增加元素间距 */
}

.Layout_leaf {
  background: #ffffffcc;
  padding: 25px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  width: 95vw;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px;
}

.Layout_right {
  width: 100%;
  max-width: 300px;
  background: rgba(226, 226, 226, 0.3);
  border-radius: 12px;
  margin-left: 20px;
  box-sizing: border-box;
  padding: 10px;
  height: auto;
  max-height: 400px;
  overflow-y: auto; /* 可滚动，防止内容溢出 */
}

textarea#ask {
  width: 100%;
  font-size: 16px;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #bbb;
  resize: vertical;
  min-height: 120px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

textarea#ask:focus {
  border-color: #0078d7;
  outline: none;
  box-shadow: 0 0 6px #0078d7aa;
}

#sendButton {
  margin-top: 15px;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #0078d7;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: flex-start;
  box-shadow: 0 4px 8px rgba(0, 120, 215, 0.3);
}

#sendButton:hover {
  background-color: #005a9e;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 90, 158, 0.4);
}

hr {
  margin: 25px 0;
  border: none;
  border-top: 1px solid #ddd;
}

h6 {
  margin: 0 0 12px 0;
  font-weight: 700;
  color: #222;
  letter-spacing: 0.03em;
}

#answer {
  background-color: #fefefe;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 18px;
  min-height: 140px;
  white-space: pre-wrap;
  font-size: 16px;
  color: #222;
  box-shadow: inset 0 1px 3px #ddd;
  transition: background-color 0.3s ease;
}

#answer:empty {
  color: #999;
  font-style: italic;
}

.buttonFlex {
  display: flex;
  justify-content: space-between;
}

.saveButton {
  margin-top: 15px;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #0078d7;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: flex-start;
  box-shadow: 0 4px 8px rgba(0, 120, 215, 0.3);
  margin-left: 20px;
}

.saveButton:hover {
  background-color: #005a9e;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 90, 158, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    gap: 10px; /* 增加垂直间距 */
  }
  .Layout_right {
    width: 100%;
    margin-left: 0;
  }
  .Layout_leaf {
    width: 100%;
    max-width: none;
  }
}
</style>
