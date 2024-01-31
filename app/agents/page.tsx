import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      {/*<h1 className="text-3xl md:text-4xl mb-4">*/}
      {/*  Better Car People*/}
      {/*</h1>*/}
      <ul>
        <li className="hidden text-l md:block">
          🚗
          <span className="ml-2">
            Welcome to our smart vehicle valuation assistant, integrated with KBB leads to provide your dealership with a chatbot that is enhancing your buying centre or BDC.
            {/*<code>app/api/chat/route.ts</code>.*/}
          </span>
        </li>
        <li>
          🤖
          <span className="ml-2">
           This chatbot uses advanced AI to answer your questions regarding vehicle valuation, trade-in processes, and dealership policies, making your car buying experience seamless and transparent.
          </span>
        </li>
        <li className="hidden text-l md:block">
          🛠️
          <span className="ml-2">
           Explore the bot&apos;s features in the chat interface, where you can ask questions like:
          </span>
        </li>
        <li className="ml-3 text-l">
          👇
          <span className="ml-2">
            &quot;Can you explain how the dealership determines the trade-in value of a vehicle, considering factors like market demand, vehicle condition, and current mileage, and how does this compare to the initial KBB estimate?&quot;
          </span>
        </li>
        <li className="ml-3 text-l">
          👇
          <span className="ml-2">
            &quot;What specific documentation is required for selling a vehicle that has undergone major modifications or has a salvage title, and how do these factors impact the final offer price from the dealership?&quot;
          </span>
        </li>
        <li className="ml-3 text-l">
          👇
          <span className="ml-2">
            &quot;In the event of a discrepancy between the KBB estimated value and the dealership&quot;s appraisal, what steps can I take to negotiate a better offer, and what are the key considerations the dealership takes into account during such negotiations?&quot;
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🏴‍☠️"
      titleText="Better Car People"
      placeholder="I'm the BCB LLM! ask me questions"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
