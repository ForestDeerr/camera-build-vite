import { filterType } from '../../const';

type CatalogFilterTypeProps = {
  categoryCameras: string;
  addFilterType: [];
  setAddFilterType: (isActive: []) => void;
  activeFilters: {};
  satActiveFilters: void;
}


function CatalogFilterType({categoryCameras, addFilterType, setAddFilterType, activeFilters, satActiveFilters}: CatalogFilterTypeProps): JSX.Element {

  const categoryCamera = categoryCameras;


  function checkArr (cb) {
    addFilterType.includes(cb) ? setAddFilterType(addFilterType.filter((typeCamera) => typeCamera !== cb)) : setAddFilterType([...addFilterType, cb]);
  }


  function changeActiveFilters (typeFilter) {
    const cloneActiveFilters = {};
    Object.assign(cloneActiveFilters, activeFilters);
    [...Object.keys(activeFilters)].map((type) => {
      if (type === typeFilter) {
        cloneActiveFilters[type] = !cloneActiveFilters[type];
      }
    }
    );
    return cloneActiveFilters;
  }


  function applyActivFelters (cb) {
    satActiveFilters(changeActiveFilters (cb));
    checkArr(filterType[cb]);
  }

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title&#45;&#45;h5">Тип камеры</legend>
      {Object.keys(filterType).map((type, id) => (

        <div key={id} className="custom-checkbox catalog-filter__item">
          <label>
            <input onChange={ () => {
              applyActivFelters(type);
            }}
            checked={activeFilters[type]}
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
