const Home = () => {

    let getLastTopics = JSON.parse(localStorage.getItem('topicValues'))

    return (
        <div className="main">

            <div className="container">
                
                <div className="row">
                    <div className="col-md-8 m-2">
                        <div className="card border-warning mb-3">
                            <div className="card-header">Bienvenue </div>
                            <div className="card-body">
                                <h4 className="card-title">Warning card title</h4>
                                <p className="card-text">
                                    Veniam fugiat cillum nulla nisi minim non excepteur. Et aute amet culpa Lorem dolore anim enim Lorem incididunt sit commodo veniam. Fugiat et incididunt dolor reprehenderit. Adipisicing occaecat officia pariatur proident qui ex consectetur aliquip amet sit officia.
                                    Consectetur dolore ex reprehenderit cillum Lorem irure ullamco aliqua pariatur nisi ipsum in enim incididunt. Eu qui pariatur non pariatur ullamco ipsum cillum amet. Aliqua adipisicing est culpa proident do nostrud consectetur tempor consectetur enim in sunt exercitation ad. Tempor proident fugiat ea amet aliquip nostrud commodo aliqua in nulla ea dolore. Dolore cillum sunt voluptate esse voluptate laboris esse reprehenderit Lorem voluptate. Velit do nisi commodo amet dolor veniam dolor nostrud. Deserunt tempor ut minim aliqua proident voluptate in magna laboris qui.

                                </p>
                                
                            </div>
                        </div>
                        <div className="card border-warning mb-3">
                            
                            <div className="card-body">
                                <h4 className="card-title">Description</h4>
                                <p className="card-text">
                                    Veniam fugiat cillum nulla nisi minim non excepteur. Et aute amet culpa Lorem dolore anim enim Lorem incididunt sit commodo veniam. Fugiat et incididunt dolor reprehenderit. Adipisicing occaecat officia pariatur proident qui ex consectetur aliquip amet sit officia.
                                    Consectetur dolore ex reprehenderit cillum Lorem irure ullamco aliqua pariatur nisi ipsum in enim incididunt. Eu qui pariatur non pariatur ullamco ipsum cillum amet. Aliqua adipisicing est culpa proident do nostrud consectetur tempor consectetur enim in sunt exercitation ad. Tempor proident fugiat ea amet aliquip nostrud commodo aliqua in nulla ea dolore. Dolore cillum sunt voluptate esse voluptate laboris esse reprehenderit Lorem voluptate. Velit do nisi commodo amet dolor veniam dolor nostrud. Deserunt tempor ut minim aliqua proident voluptate in magna laboris qui.

                                    Eiusmod ut aliqua voluptate dolore ut proident. Excepteur eiusmod minim velit aliqua occaecat nisi. Sunt consectetur ad ad ad exercitation laborum sunt cillum ad cupidatat sunt consectetur consequat veniam. Lorem ipsum eu aliquip proident amet culpa consequat fugiat magna elit laborum fugiat ipsum consectetur. Enim ipsum ipsum nulla tempor nostrud occaecat dolor non elit tempor quis pariatur eu labore. Est fugiat enim eu proident. Veniam et Lorem est reprehenderit et laborum et culpa veniam incididunt esse mollit.
                                    Eiusmod ut aliqua voluptate dolore ut proident. Excepteur eiusmod minim velit aliqua occaecat nisi. Sunt consectetur ad ad ad exercitation laborum sunt cillum ad cupidatat sunt consectetur consequat veniam. Lorem ipsum eu aliquip proident amet culpa consequat fugiat magna elit laborum fugiat ipsum consectetur. Enim ipsum ipsum nulla tempor nostrud occaecat dolor non elit tempor quis pariatur eu labore. Est fugiat enim eu proident. Veniam et Lorem est reprehenderit et laborum et culpa veniam incididunt esse mollit.
                                    Eiusmod ut aliqua voluptate dolore ut proident. Excepteur eiusmod minim velit aliqua occaecat nisi. Sunt consectetur ad ad ad exercitation laborum sunt cillum ad cupidatat sunt consectetur consequat veniam. Lorem ipsum eu aliquip proident amet culpa consequat fugiat magna elit laborum fugiat ipsum consectetur. Enim ipsum ipsum nulla tempor nostrud occaecat dolor non elit tempor quis pariatur eu labore. Est fugiat enim  Sunt consectetur ad ad ad .

                                    Anim mollit laboris sit dolor commodo proident. Pariatur tempor dolore esse tempor esse enim in velit minim ut sit do incididunt aute. Consectetur do sit in irure. Ullamco amet officia laboris veniam consectetur magna minim aute anim. Cupidatat nostrud quis ad dolor pariatur. Consequat sit tempor aute ex aliqua ea adipisicing culpa quis ullamco ea dolore et. Mollit excepteur ipsum cillum qui dolore ad eu nulla quis nostrud laboris.

                                    Tempor duis reprehenderit id dolore aute pariatur enim. Proident qui adipisicing sit occaecat adipisicing elit officia ullamco aliquip. Officia adipisicing occaecat excepteur nisi adipisicing exercitation ipsum mollit nulla ex enim labore eu commodo.
                                </p>
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="col-md-3 m-2">

                        <h4>Some topics</h4>
                        <div className="card bg-light mb-3" >
                            <div className="card-header">Topic 1</div>
                            <div className="card-body">
                                <h4 className="card-title">{getLastTopics[0].nom}</h4>
                                <p className="card-text">{getLastTopics[0].texte_topic}</p>
                            </div>
                        </div>
                        <div className="card bg-light mb-3" >
                            <div className="card-header">Topic 2</div>
                            <div className="card-body">
                                <h4 className="card-title">{getLastTopics[1].nom}</h4>
                                <p className="card-text">{getLastTopics[1].texte_topic}</p>
                            </div>
                        </div>
                        <div className="card bg-light mb-3" >
                            <div className="card-header">Topic 3</div>
                            <div className="card-body">
                                <h4 className="card-title">{getLastTopics[2].nom}</h4>
                                <p className="card-text">{getLastTopics[2].texte_topic}</p>
                            </div>
                        </div>
                        <div className="card bg-info mb-3" >

                            <div className="card-body">

                                <h4 className="card-title">Informations sur le site</h4>
                                <p className="card-text">FAIT PAR DES STAGIAIRES POUR DES STAGIAIRES <br/> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Home;