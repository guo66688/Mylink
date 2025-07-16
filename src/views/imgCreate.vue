<template>
  <div class="main-container">
    <div class="Layout_leaf">
      <textarea 
        id="ask" 
        rows="5" 
        cols="50" 
        placeholder="请描述你的图片"
        v-model="question"
      ></textarea>
      <div class="pic-num-container">
        <div>图片数量</div>
        <input type="number" v-model="picnum" class="picNumText" min="1" max="5">
      </div>
      <div class="buttonFlex">
        <button @click="send" id="sendButton" :disabled="!sendOk">{{ sendOk ? "发送" : "发送中..." }}</button>
        <button @click="save" class="saveButton">保存</button>
      </div>
      <hr>
      <h6>AI画图</h6>
      <h6 v-if="task_id != ''">任务请求号: {{ task_id }}</h6>
      <div class="image-gallery">
        <img alt="Generated Image" height="200px" width="200px" v-for="u in urls" :key="u" :src="u" class="generated-image">
      </div>
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
import axios from '../axios';
import { useInfoStore } from '../store/infoStore';
import { showHistory, loadHistory } from "../common/js/Histroy";

const question = ref('');
const answer = ref('');
const sendOk = ref(true);
const picnum = ref(1);
const task_id = ref('');
const urls = ref([]);
let timer = null;
const histroys = ref([]);

const sendTrun = (boolen) => {
  sendOk.value = boolen;
}

// 保存
function save() {
  if (question.value !== '' && urls.value !== '') {
    const Data = JSON.stringify(urls.value);
    localStorage.setItem('P-' + question.value, Data);
  }
}

// 加载历史记录
const showH = (item) => {
  let Data = showHistory('P', item);
  urls.value = Data ? JSON.parse(Data) : [];
}

// 加载历史记录
onMounted(() => {
  histroys.value = loadHistory('P');
})

function send() {
  answer.value = '';
  urls.value = [];
  axios.post("/api/api/v1/services/aigc/text2image/image-synthesis", {
    "model": "wanx2.1-t2i-turbo",
    "input": {
      "prompt": question.value
    },
    "parameters": {
      "size": "1024*1024",
      "n": Number(picnum.value)
    }
  }, {
    headers: {
      "X-DashScope-Async": "enable",
    }
  })
    .then(d => {
      if (d.data.output) {
        task_id.value = d.data.output.task_id;
        sendTrun(false);
        timer = window.setInterval(queryResult, 5000);
      } else {
        alert("请求失败:" + d.data.message);
      }
    })
    .finally(() => {
    })
}

// 查询结果
const queryResult = () => {
  axios.get(`/api/api/v1/tasks/${task_id.value}`)
    .then(res => {
      if (res.data.output.task_status === "FAILED") {
        window.clearInterval(timer);
        alert("失败,稍后尝试");
        sendTrun(true);
        return;
      }
      if (res.data.output.task_status === "SUCCEEDED") {
        let results = res.data.output.results;
        for (let i = 0; i < results.length; i++) {
          urls.value.push(results[i].url);
        }
        let count = res.data.usage.image_count;
        const store = useInfoStore();
        store.addImg(count);
        window.clearInterval(timer);
        sendTrun(true);
        return;
      }
    })
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
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
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

.picNumText {
  height: 30px;
  width: 100px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #bbb;
  padding-left: 10px;
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

.image-gallery {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.generated-image {
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .Layout_leaf {
    width: 100%;
    max-width: none;
  }
  .Layout_right {
    max-width: 100%;
    margin-left: 0;
  }
}
</style>
