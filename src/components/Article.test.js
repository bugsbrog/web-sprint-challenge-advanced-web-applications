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
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
});

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.