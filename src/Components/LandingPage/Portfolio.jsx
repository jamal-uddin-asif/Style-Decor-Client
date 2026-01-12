import Container from "../Shared/Container";
import SectionTitle from "../Shared/SectionTitle";

export const Portfolio = () => (
  <Container>
    <section className="py-20  p-2  text-center ">
      <SectionTitle base={'Our Latest'} color={'Creations'}/>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4  mx-auto">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=500"
          className="rounded-lg hover:scale-105 transition-all shadow-sm"
          alt="Event"
        />
        <img
          src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=500"
          className="rounded-lg hover:scale-105 transition-all shadow-sm"
          alt="Office"
        />
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=500"
          className="rounded-lg hover:scale-105 transition-all shadow-sm"
          alt="Wedding"
        />
      </div>
    </section>
  </Container>
);
