import { render, screen } from "@testing-library/react";
import CatalogItem from "./CatalogItem";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


describe('Catalog Item Component', () => {
    test('Show title', () => {
        const title = 'Test title';
        render(
            <BrowserRouter >
                <CatalogItem title={title} />
            </BrowserRouter>
        );

        expect(screen.queryByText(title)).toBeInTheDocument();
    });

});