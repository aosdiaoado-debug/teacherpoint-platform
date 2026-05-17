import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GRADIENTS } from "@/data/mock";

export const Route = createFileRoute("/marketplace")({ component: Market, head: () => ({ meta: [{ title: "Marketplace · TeacherPoint" }, { name: "description", content: "Study materials, services and accommodation for students." }] }) });

const img = (id: string, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const ITEMS = [
  { cat: "materials", title: "Class 12 Physics Notes Bundle", price: 9, by: "Mark Wilson", g: 0, image: img("1636466497217-26a8cbeaf0aa") },
  { cat: "materials", title: "JEE Math Formula Sheets", price: 6, by: "Neha Iyer", g: 1, image: img("1635070041078-e363dbe005cb") },
  { cat: "services", title: "Resume Review by HR Expert", price: 25, by: "TP Pro", g: 2, image: img("1586281380349-632531db7ed4") },
  { cat: "services", title: "1-on-1 Mock Interview", price: 35, by: "Mentor Network", g: 3, image: img("1573497019940-1c28c88b4f3e") },
  { cat: "accommodation", title: "Student PG · Bengaluru", price: 220, by: "Verified Host", g: 4, image: img("1522708323590-d24dbb6b0267") },
  { cat: "accommodation", title: "Shared Apartment · Delhi", price: 180, by: "Verified Host", g: 5, image: img("1560448204-e02f11c3d0e2") },
];

function Card({ i }: { i: typeof ITEMS[0] }) {
  return (
    <article className="bg-card border rounded-2xl overflow-hidden hover:shadow-card transition group">
      <div className="aspect-video relative overflow-hidden" style={{ background: GRADIENTS[i.g] }}>
        <img src={i.image} alt={i.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <Badge variant="secondary" className="capitalize">{i.cat}</Badge>
        <h3 className="font-display font-bold mt-2 leading-tight">{i.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">By {i.by}</p>
        <div className="flex items-center justify-between mt-3"><span className="font-display font-bold text-lg">${i.price}</span><Button size="sm" className="bg-gradient-primary">Buy</Button></div>
      </div>
    </article>
  );
}

function Market() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="font-display font-extrabold text-3xl">Marketplace</h1>
      <p className="text-muted-foreground mt-1 mb-6">Study materials, services, and verified accommodation.</p>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="materials">Study Materials</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
        </TabsList>
        {(["all", "materials", "services", "accommodation"] as const).map((c) => (
          <TabsContent key={c} value={c} className="mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ITEMS.filter((i) => c === "all" || i.cat === c).map((i, k) => <Card key={k} i={i} />)}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
