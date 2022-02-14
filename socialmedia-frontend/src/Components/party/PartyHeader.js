import React from 'react';
import UserIconStandart from '../standarts/UserIconStandart';

function PartyHeader() {
    return (
        <div className='party_header'>
            <div className='party_vatar'>
                <UserIconStandart avatar={'https://images-americanas.b2w.io/produtos/2021883076/imagens/painel-redondo-de-festa-boteco-150x150-bt01/2021883076_1_large.jpg'} />
            </div>
            <div className='Party_data'>
                <div className='party_name'>
                <h3 id='nome_festa'> Festa</h3>
                </div>
                <div className='party_infos'>
                    <h3 id='Horário'> Horário</h3>
                    <h3 id='Local'> Local</h3>
                    <h3 id='valor'> valor</h3>
                </div>
                <div className='resumo'>
                <h3 id='resumo'>Resumo</h3>
                </div>
            </div>
        </div>
    );
}

export default PartyHeader;
