import "./App.css";
import { AccordionCard } from "./components/AccordionCard";
import Breadcrumb from "./components/Breadcrumb";
import { Header } from "./components/Header";
import LeftNav from "./components/LeftNav";
import { HiHome } from "react-icons/hi";
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
      <main className="flex flex-row flex-grow overflow-y-hidden">
        <section className="bg-white p-4">
          <LeftNav items={leftNavItems} />
        </section>
        <div className="flex-grow p-6">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="my-6 text-2xl font-bold">Permit To Work</h1>
          <div className="flex flex-grow">
            <section className="flex-grow pr-5 overflow-y-auto max-h-screen">
              <AccordionCard title="Summary" subtitle="PTW 230911001">
                <h1>hsdkjfkds</h1>
              </AccordionCard>
              <AccordionCard title="Summary" subtitle="PTW 230911001">
                <h1>hsdkjfkds</h1>
              </AccordionCard>
              <AccordionCard title="Summary" subtitle="PTW 230911001">
                <h1>hsdkjfkds</h1>
              </AccordionCard>
              <AccordionCard title="Summary" subtitle="PTW 230911001">
                <h1>hsdkjfkds</h1>
              </AccordionCard>
              <AccordionCard title="Summary" subtitle="PTW 230911001">
                <h1>hsdkjfkds</h1>
              </AccordionCard>
              <AccordionCard title="Summary" subtitle="PTW 230911001">
                <h1>hsdkjfkds</h1>
              </AccordionCard>
              <AccordionCard title="Summary" subtitle="PTW 230911001">
                <h1>hsdkjfkds</h1>
              </AccordionCard>
              <AccordionCard title="Summary" subtitle="PTW 230911001">
                <h1>hsdkjfkds</h1>
              </AccordionCard>
            </section>
            <section className="sm:hidden md:flex flex-col w-64 whitespace-normal">
              <button className="flex justify-center items-center mb-5 bg-white border-2 border-gray-300 text-black px-4 py-2 rounded-md">
                Change Log
              </button>
              <div className="">
                <h3 className="pb-8 text-gray-500 text-2xl">WORK DETAILS</h3>
                <div className="px-5">
                  <StepsList steps={steps} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
