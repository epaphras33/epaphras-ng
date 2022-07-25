
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import ServiceSection from "../Components/ServiceSection";
import ReviewSection from "../Components/ReviewSection";
import { MainLayout } from "../Styles/Layouts";

function AboutPage() {
    return (
        <MainLayout>
            <section>
                <Title title={"About Me"} span={"About Me"} />
                <ImageSection />
                <ServiceSection />
                <ReviewSection />
            </section>
        </MainLayout>
    )
}

export default AboutPage;