import { profile } from "@/data/profile";
import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Identity from "@/components/Identity";
import About from "@/components/About";
import Hobbies from "@/components/Hobbies";
import Socials from "@/components/Socials";
import QuickInfo from "@/components/QuickInfo";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <Background />
      <ScrollEffects />

      <Nav name={profile.name} links={profile.nav} />

      <div className="page">
        <div className="profile">
          <Hero
            label={profile.hero.label}
            name={profile.name}
            tagline={profile.hero.tagline}
          />

          <main className="content">
            <Identity profile={profile} />
            <About about={profile.about} />
            <Hobbies hobbies={profile.hobbies} />
            <Socials socials={profile.socials} />
            {profile.quickInfo && <QuickInfo quickInfo={profile.quickInfo} />}
            <Faq faq={profile.faq} />

            <div className="quote">
              <strong>&quot;{profile.quote.text}&quot;</strong>
              <br />
              {profile.quote.author}
            </div>

            <Footer line={profile.footer.line} timezone={profile.footer.timezone} />
          </main>
        </div>
      </div>
    </>
  );
}
