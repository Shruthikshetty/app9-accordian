import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }: { data: faqsType }) {
  return (
    <div className="accordion">
      {data.map((each, index) => (
        <AccordionItem
          title={each.title}
          text={each.text}
          num={index}
          key={each.title}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }: AccordianItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((s) => !s);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? `-` : `+`}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

type AccordianItemProps = {
  num: number;
  title: string;
  text: string;
};

type faqsType = {
  title: string;
  text: string;
}[];
