// app\dashboard\filblock\page.tsx

import ListPage from './list';

// 定义 FilBlock 页面组件
export default async function FilBlockPage() {
  return (
    <div>
      {/* <h1>FilBlock Dashboard</h1> */}
      <ListPage /> {/* 包含列表页面组件 */}
    </div>
  );
}
