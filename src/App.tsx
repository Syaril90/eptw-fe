import "./App.css";
import { AccordionCard } from "./components/AccordionCard";
import Breadcrumb from "./components/Breadcrumb";
import { Header } from "./components/Header";
import LeftNav from "./components/LeftNav";
import {
  HiHome,
  HiCheck,
  HiOutlineUser,
  HiOutlineInbox,
  HiOutlineClipboard,
} from "react-icons/hi";
import { StepItem, StepsList } from "./components/StepList";

function App() {
  const leftNavItems = [
    { icon: "/Home.png", label: "Home" },
    { icon: "/Pdf.png", label: "Profile" },
    { icon: "/QR.png", label: "Settings" },
    { icon: "/Chart.png", label: "Settings" },
    { icon: "/File.png", label: "Settings" },
  ];

  const breadcrumbItems = [
    { text: "Home", Icon: HiHome },
    { text: "Permit To Work" },
  ];

  const steps: StepItem[] = [
    {
      title: "Requisitions",
      active: true,
    },
    {
      title: "Hazards/ Hazardous Activities",
    },
    {
      title: "Worksite Preparations & Precautions",
    },
    {
      title: "Personal Protective Equipments (PPE)",
    },
    {
      title: "Supporting Certificates & Documents",
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex flex-row flex-grow">
        <section className="bg-white p-4">
          <LeftNav items={leftNavItems} />
        </section>
        <div className="flex-grow p-6">
          <Breadcrumb items={breadcrumbItems} />
          <div className="flex flex-grow">
            <section className="flex-grow p-5">
              <h1 className="my-6 text-2xl font-bold">Permit To Work</h1>
              <AccordionCard title="Summary" subtitle="PTW 230911001">
                <h1>hsdkjfkds</h1>
              </AccordionCard>
            </section>
            <section className="p-4 w-64 whitespace-normal">
              <StepsList steps={steps} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
