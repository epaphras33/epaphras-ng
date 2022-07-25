import { MainLayout, InnerLayout } from "../Styles/Layouts";
import { useState } from "react";
import Title from "../Components/Title";
import portfolios from "../Data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

// MAPPED ALL BUTTON CATEGORIES WITH **new Set()** METHOD TO AVOID REDUNDANCY!!!
const allCategories = ["All", ...new Set(portfolios.map(button => button.category))];

function PortfolioPage() {
    const [menuItem, setMenuItem] = useState(portfolios);
    const [buttons, setButtons] = useState(allCategories);

    const filter = (button) => {
        if (button === "All") {
            setMenuItem(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItem(filteredData);
    }

    return (
        <MainLayout>
            <section>
                <Title title={"Portfolio"} span={"Portfolio"} />
                <InnerLayout>
                    <Button filter={filter} buttons={buttons} aria-label="select a category" />
                    <Menu menuItem={menuItem} />
                </InnerLayout>
            </section>
        </MainLayout>
    )
}

export default PortfolioPage;