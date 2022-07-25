import Resume from "../Components/Resume";
import Skills from "../Components/Skills";
import { MainLayout } from "../Styles/Layouts";

function ResumePage() {
    return (
        <MainLayout>
            <section>
                <Skills />
                <Resume />
            </section>
        </MainLayout>
    )
}

export default ResumePage;