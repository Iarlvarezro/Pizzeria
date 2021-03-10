import React from 'react';
import { Page, Butt, Input } from '../../components'
import { IngList } from '../Addpizza/components/inglist/ing-list'
import '../../styles'

export default function Ing({ ingredients }) {
    return (
        <Page>
            <h2>Todos los Ingredientes</h2>
            <IngList ingredients={ingredients} />
            <h2>Crea un nuevo ingredientes</h2>

            <div>añade un nombre</div>
            <Input placeholder="Nombre" />

            <div>añade un precio</div>
            <Input placeholder="00.00.00€" />

            <Butt name="Crear nuevo ingrediente" />

        </Page>
    )

}

