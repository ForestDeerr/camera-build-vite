import Card from './card';

import { CamerasType } from '../types/cameras';

type CatalogCardsProps = {
  cameras: CamerasType;

}

function CatalogCards({cameras}: CatalogCardsProps): JSX.Element {

  return (

    <div className="cards catalog__cards">
      {cameras.map((camera) => (
        <Card key={camera.id} cameraCard={camera} />
      ))}
    </div>

  );
}

export default CatalogCards;

