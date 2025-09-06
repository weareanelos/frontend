"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChartPieDonutText } from "@/components/chart-pie-donut-text";
import useLayoutData from "@/hooks/useProfileLayoutData";

const curriculums = [
  {
    id: 1,
    name: "Currículo 1",
  },
  {
    id: 2,
    name: "Currículo 2",
  },
  {
    id: 3,
    name: "Currículo 3",
  },
  {
    id: 4,
    name: "Currículo 4",
  },
  {
    id: 5,
    name: "Currículo 5",
  },
  {
    id: 6,
    name: "Currículo 6",
  },
  {
    id: 7,
    name: "Currículo 7",
  },
  {
    id: 8,
    name: "Currículo 8",
  },
  {
    id: 9,
    name: "Currículo 9",
  },
  {
    id: 10,
    name: "Currículo 10",
  },
];

export default function OverviewPage() {
  const { user } = useLayoutData();

  return (
    <section className="grid grid-cols-2 gap-6">
      <Card className="col-span-2 px-2 md:p-4 lg:col-span-1">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="font-semibold text-xl">
            Informações Pessoais
          </CardTitle>
          <Button
            className="bg-[#036147] hover:bg-[#036146d5] text-white"
            size="lg"
          >
            Editar
          </Button>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col gap-6 font-light text-[#717579] dark:text-[#c8c8c8]">
          <div className="md:flex justify-between items-center">
            <p>Nome Completo:</p>
            <p className="font-semibold text-[#717579] dark:text-[#c8c8c8]">
              {user?.name ?? ""}
            </p>
          </div>
          <div className="md:flex justify-between items-center">
            <p>Email:</p>
            <p className="font-semibold text-[#717579] dark:text-[#c8c8c8]">
              {user?.email ?? ""}
            </p>
          </div>
          <div className="md:flex justify-between items-center">
            <p>Telefone:</p>
            <p className="font-semibold text-[#717579] dark:text-[#c8c8c8]">
              {user?.phone ?? ""}
            </p>
          </div>
          <div className="md:flex justify-between items-center">
            <p>Endereço:</p>
            <p className="font-semibold text-[#717579] dark:text-[#c8c8c8]">
              {user?.address ?? ""}
            </p>
          </div>
          <div className="md:flex justify-between items-center">
            <p>País de Origem:</p>
            <p className="font-semibold text-[#717579] dark:text-[#c8c8c8]">
              {user?.country ?? ""}
            </p>
          </div>
          <div className="md:flex justify-between items-center">
            <p>Profissão:</p>
            <p className="font-semibold text-[#717579] dark:text-[#c8c8c8]">
              {user?.job ?? ""}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-2 p-[4px] py-4 md:p-4 lg:col-span-1 lg:row-span-2">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="font-semibold text-xl">
            Currículos Criados
          </CardTitle>
          <Button
            className="bg-[#036147] hover:bg-[#036146d5] text-white"
            size="lg"
          >
            Novo Currículo
          </Button>
        </CardHeader>
        <Separator />
        <CardContent className="overflow-y-auto whitespace-nowrap flex flex-col p-0 gap-4 w-full max-h-[320px] lg:max-h-full">
          {curriculums.map((curriculum) => (
            <Card
              className="flex-row justify-between items-center p-2"
              key={curriculum.id}
            >
              <div className="flex flex-row gap-6">
                <span>{curriculum.id}</span>
                <h5>{curriculum.name}</h5>
              </div>
              <div className="flex gap-2">
                <Button className="bg-yellow-300 text-black">Editar</Button>
                <Button variant="destructive">Excluir</Button>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
      <Card className="col-span-2 lg:col-span-1 p-[4px] py-4 md:p-4 w-full lg:w-auto">
        <CardHeader className="items-center pb-0">
          <CardTitle className="font-semibold text-xl">
            Média de Aprovação
          </CardTitle>
        </CardHeader>
        <Separator />
        <ChartPieDonutText />
      </Card>
    </section>
  );
}
