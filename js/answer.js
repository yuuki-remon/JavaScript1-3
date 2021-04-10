'use strict';

{
  function taskContent() {
    
    console.log("========================");
    console.log("現在持っているタスク一覧");
    console.log("========================");
  
    for (let i = 0; i < taskList.length; i++) {
      console.log(`${i} : ${taskList[i]}`);
    }
  }
  
  let taskList = ['掃除', '買い物', '散歩'];
  
  taskContent();
  
  while (true) {
    let task = prompt('タスクを入力してください');
    
    if (task === '') {
      alert('入力されていません。');
    } 
    else if (task === null) {
      alert('キャンセルされました。');
    }
    else {
      taskList.push(task);
      alert('新しいタスクを追加しました。');
    }

    if (task === '' || task === null) continue;
    
    taskContent();

    prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
    
    break;
  }
}