import { filterType } from '../../const';

type CatalogFilterTypeProps = {
  categoryCameras: string;
  addFilterType: [];
  setAddFilterType: (isActive: []) => void;
}


function CatalogFilterType({categoryCameras, addFilterType, setAddFilterType}: CatalogFilterTypeProps): JSX.Element {

  const categoryCamera = categoryCameras;


  function checkArr (cb) {
    addFilterType.includes(cb) ? setAddFilterType(addFilterType.filter((typeCamera) => typeCamera !== cb)) : setAddFilterType([...addFilterType, cb]);
  }

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title&#45;&#45;h5">Тип камеры</legend>
      {Object.keys(filterType).map((type, id) => (

        <div key={id} className="custom-checkbox catalog-filter__item">
          <label>
            <input onChange={ () => {
              checkArr(filterType[type]);

            }}
            type="checkbox" name={type} disabled={type === 'film' && categoryCamera === 'videocamera' || type === 'snapshot' && categoryCamera === 'videocamera'}
            />
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">{filterType[type]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default CatalogFilterType;
