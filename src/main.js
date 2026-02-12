import './style.css'

const presentations = [
  { category: 'グランプリ', title: 'AI生成アプリでマイナスをゼロにする（美術）', type: 'gp' },
  { category: 'グランプリ', title: '寺子屋的授業を目指して（社会）', type: 'gp' },
  { category: 'グランプリ', title: 'Eiken Knowledge Hub（英語）', type: 'gp' },
  { category: 'グランプリ', title: '「学びに向かう力」の涵養（国語）', type: 'gp' },
  { category: 'グランプリ', title: '今年の活用報告書（理科）', type: 'gp' },

  // Department Nominees - 'years' property added for sorting
  { category: '4-7年', title: 'ゲーム分析AIと挑む『面白い授業』（理科）', type: 'dept', years: 4 },
  { category: '15年〜', title: 'オモシロイを言語化して実装せよ！（情報）', type: 'dept', years: 15 },
  { category: '3年', title: 'AIと一緒に将来を考える（保健体育）', type: 'dept', years: 3 },
  { category: '8-10年', title: '来客管理のデジタル化提案（事務職員）', type: 'dept', years: 8 },
  { category: '3年', title: 'ＡＩで商品企画（商業）', type: 'dept', years: 3 },
  { category: '1-2年', title: 'AI×反復＝数学力UP！（数学）', type: 'dept', years: 1 },
  { category: '4-7年', title: '私の「推し」を最強にする！（英語）', type: 'dept', years: 4 },
  { category: '15年〜', title: 'ロイロ・フォーム・スプレッドシート連携（国語）', type: 'dept', years: 15 },
  { category: '8-10年', title: '学校保健要項のデジタル化（養護）', type: 'dept', years: 8 },
  { category: '1-2年', title: 'ピチピチ・アナログ世代の挑戦（英語）', type: 'dept', years: 1 },
  { category: '1-2年', title: '「振り返り」の蓄積で育む自己調整学習（国語）', type: 'dept', years: 1 }
];

const gpList = document.getElementById('gp-list');
const deptList = document.getElementById('dept-list');

// Sort department items by years of service (ascending)
const sortedPresentations = presentations.sort((a, b) => {
  if (a.type === 'dept' && b.type === 'dept') {
    return (a.years || 0) - (b.years || 0);
  }
  return 0;
});


sortedPresentations.forEach((item) => {
  const listItem = document.createElement('div');

  if (item.type === 'gp') {
    listItem.className = 'list-item gp-item';
    listItem.innerHTML = `
      <span class="tag">👑 ${item.category}</span>
      <h3>${item.title}</h3>
    `;
    gpList.appendChild(listItem);
  } else {
    // Determine tag based on category content
    let tagClass = 'tag-dept';
    listItem.className = 'list-item dept-item';
    listItem.innerHTML = `
      <span class="tag ${tagClass}">勤続 ${item.category}</span>
      <h3>${item.title}</h3>
    `;
    deptList.appendChild(listItem);
  }
});
