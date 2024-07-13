import { filterLevel } from '../../const';

type CatalogFilterLevelProps = {
  addFilterLevel: [];
  setAddFilterLevel: (isActive: []) => void;
  activeFilters: {};
  satActiveFilters: void;
}


function CatalogFilterLevel({addFilterLevel, setAddFilterLevel, activeFilters, satActiveFilters}: CatalogFilterLevelProps): JSX.Element {



  function checkArr (cb) {
    addFilterLevel.includes(cb) ? setAddFilterLevel(addFilterLevel.filter((typeCamera) => typeCamera !== cb)) : setAddFilterLevel([...addFilterLevel, cb]);
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
    checkArr(filterLevel[cb]);
  }

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title&#45;&#45;h5">Уровень</legend>

      {Object.keys(filterLevel).map((level, id) => (
        <div key={id} className="custom-checkbox catalog-filter__item">
          <label>
            <input onChange={ () => {
              applyActivFelters(level);
            }}
            checked={activeFilters[level]}
            type="checkbox" name={level}
            />
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">{filterLevel[level]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default CatalogFilterLevel;
