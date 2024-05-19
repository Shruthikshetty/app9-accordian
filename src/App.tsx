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

//lifting up state
function Accordion({ data }: { data: faqsType }) {
  const [curOpen, setCurOpen] = useState<null | number>(null);
  return (
    <div className="accordion">
      {data.map((each, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={each.title}
          num={index}
          key={each.title}
        >
          {each.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({
  num,
  title,
  children,
  curOpen,
  onOpen,
}: AccordianItemProps) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? `-` : `+`}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

type AccordianItemProps = {
  num: number;
  title: string;
  children: React.ReactNode;
  onOpen: React.Dispatch<React.SetStateAction<number | null>>;
  curOpen: null | number;
};

type faqsType = {
  title: string;
  text: string;
}[];
