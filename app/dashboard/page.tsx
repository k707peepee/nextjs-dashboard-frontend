// app\dashboard\(summary)\page.tsx

import CardPage from './card';
import BlockBrowser from './blockbrowser'

// 定义 FilBlock 页面组件
export default async function SummaryPage() {
  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      <CardPage /> {/* 包含列表页面组件 */}
      <BlockBrowser /> {/* 包含区块浏览器页面组件 */}
    </div>
  );
}

