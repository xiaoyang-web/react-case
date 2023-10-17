import { useState } from "react";
import clsx from "clsx";
import "./app.css";

const IconHome = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212C22 19.576 22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2c-1.108 0-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823ZM11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0v3Z"
      clipRule="evenodd"
    />
  </svg>
);
const IconNews = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
  >
    <path
      fill="currentColor"
      d="M22 5.75V20.5a.5.5 0 0 0 .992.09L23 20.5V7h1.25a1.75 1.75 0 0 1 1.744 1.606L26 8.75v12a3.25 3.25 0 0 1-3.066 3.245L22.75 24H5.25a3.25 3.25 0 0 1-3.245-3.066L2 20.75v-15a1.75 1.75 0 0 1 1.606-1.744L3.75 4h16.5a1.75 1.75 0 0 1 1.744 1.606L22 5.75V20.5V5.75ZM9.747 13.004H7.25a1.75 1.75 0 0 0-1.744 1.606l-.006.144v2.496a1.75 1.75 0 0 0 1.606 1.744L7.25 19h2.497a1.75 1.75 0 0 0 1.744-1.607l.005-.143v-2.496a1.75 1.75 0 0 0-1.606-1.745l-.143-.005ZM17.75 17.5h-3.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h3.5l.102-.007a.75.75 0 0 0 0-1.486l-.102-.007Zm-10.5-2.996h2.497a.25.25 0 0 1 .243.192l.007.058v2.496a.25.25 0 0 1-.193.243l-.057.007H7.25a.25.25 0 0 1-.243-.193L7 17.25v-2.496a.25.25 0 0 1 .193-.244l.057-.006h2.497H7.25Zm10.5-1.5h-3.5l-.102.006a.75.75 0 0 0 0 1.487l.102.007h3.5l.102-.007a.75.75 0 0 0 0-1.487l-.102-.006Zm0-4.507H6.25l-.102.007a.75.75 0 0 0 0 1.486l.102.007h11.5l.102-.007a.75.75 0 0 0 0-1.486l-.102-.007Z"
    ></path>
  </svg>
);
const IconMusic = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"
    ></path>
  </svg>
);
const IconSetting = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.428 2c-1.114 0-2.129.6-4.157 1.802l-.686.406C5.555 5.41 4.542 6.011 3.985 7c-.557.99-.557 2.19-.557 4.594v.812c0 2.403 0 3.605.557 4.594c.557.99 1.57 1.59 3.6 2.791l.686.407C10.299 21.399 11.314 22 12.428 22c1.114 0 2.128-.6 4.157-1.802l.686-.407c2.028-1.2 3.043-1.802 3.6-2.791c.557-.99.557-2.19.557-4.594v-.812c0-2.403 0-3.605-.557-4.594c-.557-.99-1.572-1.59-3.6-2.792l-.686-.406C14.555 2.601 13.542 2 12.428 2Zm-3.75 10a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const Title = () => <h1 className="title">REACT-TABS</h1>;
const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const items = [
    {
      id: "1",
      title: "首页",
      icon: <IconHome />,
      content: "首页",
    },
    {
      id: "2",
      title: "新闻",
      icon: <IconNews />,
      content: "新闻",
    },
    {
      id: "3",
      title: "音乐",
      icon: <IconMusic />,
      content: "音乐",
    },
    {
      id: "4",
      title: "设置",
      icon: <IconSetting />,
      content: "设置",
    },
  ];

  const handleTabClick = (event: React.MouseEvent<HTMLElement>) => {
    setCurrentTab(event.currentTarget.dataset["id"]!);
  };

  return (
    <>
      <div className="tabs">
        {items.map((item) => (
          <button
            key={item.id}
            className="tab"
            data-id={item.id}
            disabled={currentTab === item.id}
            onClick={handleTabClick}
          >
            {item.icon}
            <span className="text">{item.title}</span>
          </button>
        ))}
      </div>
      <div className="panels">
        {items.map((item) => (
          <div
            className={clsx({ active: item.id === currentTab }, "panel")}
            key={item.id}
          >
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};
const Footer = () => (
  <footer className="copyright">
    <a href="https://github.com/xiaoyang-web/react-case">仓库地址</a>
  </footer>
);

function App() {
  return (
    <div className="app">
      <Title />
      <Tabs />
      <Footer />
    </div>
  );
}

export default App;
