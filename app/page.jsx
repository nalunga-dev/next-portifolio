import EducationSkills from "@/components/Education";
import Halcon from "@/components/Halcons";
import Header from "@/components/Header";
import MyProjects from "@/components/Projects";
import WorkExperience from "@/components/workExperience";

export default function Profile() {
  return (
    <section>
      <Header />
      <WorkExperience />
      <EducationSkills />
      <MyProjects />
      <Halcon />
    </section>
  );
}
