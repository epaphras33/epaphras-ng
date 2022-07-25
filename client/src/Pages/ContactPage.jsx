import { MainLayout } from "../Styles/Layouts";
import Title from "../Components/Title";
import ContactForm from "../Components/ContactForm";
import Address from "../Components/Address";


function ContactPage() {
    return (
        <MainLayout>
            <section>
                <Title title={"Contact"} span={"Contact"} />
                <ContactForm />
                <Address />
            </section>
        </MainLayout>
    )
}

export default ContactPage;