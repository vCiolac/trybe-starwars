import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { offlineAPI } from '../mocks/offlineAPI';
import PlanetProvider from '../context/planets-provider';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Testando os componentes', () => {

  afterEach(() => {
    vi.clearAllMocks();
  });

  beforeEach( async  () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (offlineAPI),
    });

    render(  
      <PlanetProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </PlanetProvider>
   );

    expect(global.fetch).toBeCalledTimes(1);

  });

  test('Testa os componentes da ordenação', async () => {
    const ascendLabel = screen.getByText(/ascendente:/i);
    expect(ascendLabel).toBeInTheDocument();

    const descLabel = screen.getByText(/descendente/i);
    expect(descLabel).toBeInTheDocument();

    const descRadio = screen.getByTestId('column-sort-input-desc');
    expect(descRadio).toBeInTheDocument();

    const ascendRadio = screen.getByTestId('column-sort-input-asc');
    expect(ascendRadio).toBeInTheDocument();

    const ordenarLabel = screen.getByText(/ordenar por:/i);
    expect(ordenarLabel).toBeInTheDocument();

    const columnSort = screen.getByTestId('column-sort');
    expect(columnSort).toBeInTheDocument();

    const sortButton = screen.getByRole('button', {  name: /ordenar/i});
    expect(sortButton).toBeInTheDocument();

    const yavin = await screen.findByRole('cell', {  name: /yavin iv/i});
    userEvent.type(sortButton, 'click');
    expect(yavin).toBeInTheDocument();
   
    userEvent.selectOptions(columnSort, 'orbital_period');
    userEvent.type(descRadio, 'click');
    const bespin = await screen.findByRole('cell', {  name: /bespin/i});
    expect(bespin).toBeInTheDocument();

  });

  test('Testa os componentes da filtragem', async () => {
    const columnLabel = screen.getByText(/coluna:/i);
    expect(columnLabel).toBeInTheDocument();

    const operatorLabel = screen.getByText(/operador:/i);
    expect(operatorLabel).toBeInTheDocument();

    const valueInput = screen.getByRole('spinbutton');
    const valueDataTestId = screen.getByTestId('value-filter');
    expect(valueInput).toBeInTheDocument();
    expect(valueDataTestId).toBeInTheDocument();

    const columnOptions = screen.getByTestId('column-filter');
    expect(columnOptions).toBeInTheDocument();

    const columnDirection = screen.getByTestId('comparison-filter');
    expect(columnDirection).toBeInTheDocument();

    const applyButton = screen.getByRole('button', {  name: /aplicar filtro/i});
    expect(applyButton).toBeInTheDocument();

    const clearButton = screen.getByRole('button', {  name: /limpar filtros/i});
    expect(clearButton).toBeInTheDocument();

    const yavin = await screen.findByRole('cell', {  name: /yavin iv/i});

    userEvent.selectOptions(columnDirection, 'igual a');
    userEvent.selectOptions(columnOptions, 'diameter');
    userEvent.type(valueInput, '10200');
    userEvent.click(applyButton);
    expect(yavin).toBeInTheDocument();

    userEvent.click(clearButton);
  });

  test('Testa os input de nome', async () => {
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();
  
    await userEvent.type(searchInput, 'be');
  
    const bespin = await screen.findByRole('cell', {  name: /bespin/i})
    expect(bespin).toBeInTheDocument();
  });
});
