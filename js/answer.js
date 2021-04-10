'use strict';

{
  function taskContent() {
    
    console.log("========================");
    console.log("現在持っているタスク一覧");
    console.log("========================");
    
    for (let i = 0; i < taskList.length; i++) {
      console.log(`${i} : [内容]${taskList[i].content}、[ジャンル]${taskList[i].jenre}`);
    };
  }

  function txtWrite(txt) {
    
    if (txt === '') {
      alert('入力されていません。');
    } 
    else if (txt === null) {
      alert('キャンセルされました。');
    }
    else {
      alert('新しいタスクを追加しました。');
    }
  }
  
  let taskList = [
    {
      content:'机を片付ける', 
      jenre:'掃除',
    },

    {
      content:'牛乳を買う',
      jenre:'買い物',
    },

    {
      content:'散歩する',
      jenre:'運動',
    },
  ];

  taskContent();
  
  while (true) {
    const task = prompt('タスクを入力してください');
    txtWrite(task);
    if (task === '' || task === null) continue;

    while (true) {
      const category = prompt('ジャンルを入力してください');
      txtWrite(category); 
      if (category === '' || category === null) continue;
      
      taskList.push({
        content:task, 
        jenre:category,
      });
      
      break;
    }
    
    taskContent();

    prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
    
    break;
  }
}