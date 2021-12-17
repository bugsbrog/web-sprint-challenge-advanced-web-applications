import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const articleTest = {
    headline: 'headline test',
    author: 'author test',
    summary: 'summary test',
    body: 'body test'
}

const associatedPrTest = {
    headline: 'headline test',
    author: '',
    summary: 'summary test',
    body: 'body test'
}

test('renders component without errors', () => {
    render(<Article article={articleTest}/>)
});

test('renders headline, author from the article when passed in through props', () => {
    render(<Article article={articleTest}/>)

    const headline = screen.queryByText(/headline test/i);
    const author = screen.queryByText(/author test/i);
    const summary = screen.queryByText(/summary test/i);
    const body = screen.queryByText(/body test/i);

    expect(headline).toBeInTheDocument();
    expect(headline).toBeTruthy();
    expect(headline).not.toBeFalsy();

    expect(author).toBeInTheDocument();
    expect(author).toBeTruthy();
    expect(author).not.toBeFalsy();

    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).not.toBeFalsy();

    expect(body).toBeInTheDocument();
    expect(body).toBeTruthy();
    expect(body).not.toBeFalsy();
});

test('renders "Associated Press" when no author is given', () => {
    render(<Article article={associatedPrTest}/>)

    const randomAuthor = screen.queryByText(/Associated Press/i);

    expect(randomAuthor).toBeInTheDocument();
    expect(randomAuthor).toBeTruthy();
    expect(randomAuthor).not.toBeFalsy();
});

test('executes handleDelete when the delete button is pressed', () => {
    const handleDelete = jest.fn();

    render(<Article article={articleTest} handleDelete={handleDelete}/>);

    const button = screen.queryByTestId('deleteButton');
    userEvent.click(button);

    expect(handleDelete).toHaveBeenCalled();

});