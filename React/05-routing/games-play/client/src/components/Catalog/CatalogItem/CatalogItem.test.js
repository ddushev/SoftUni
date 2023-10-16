import { render, screen } from "@testing-library/react";
import CatalogItem from "./CatalogItem";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";


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

    test('Click on details', async () => {
        global.window = { location: { pathname: null } };
        const itemId = 'id';

        render(
            <BrowserRouter >
                <CatalogItem _id={itemId} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Details'));

        expect(global.window.location.pathname).toContain(`/details/${itemId}`);
    });

});