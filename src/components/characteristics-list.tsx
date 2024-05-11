import { CameraType } from '../types/cameras';
import { Characteristics } from '../const';

type CharacteristicsListProps = {
  camera: CameraType;
}

function CharacteristicsList({camera}: CharacteristicsListProps): JSX.Element {

  return (
    <ul className="product__tabs-list">
      {Object.keys(Characteristics).map((ele, id) => (
        <li key={id} className="item-list"><span className="item-list__title">{Characteristics[ele]}</span>
          <p className="item-list__text"> {camera[ele]}</p>
        </li>
      ))}
    </ul>
  );
}

export default CharacteristicsList;

