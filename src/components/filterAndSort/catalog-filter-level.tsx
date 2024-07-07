import { filterLevel } from '../../const';

type CatalogFilterLevelProps = {
  addFilterLevel: [];
  setAddFilterLevel: (isActive: []) => void;
}


function CatalogFilterLevel({addFilterLevel, setAddFilterLevel}: CatalogFilterLevelProps): JSX.Element {

  function checkArr (cb) {
    addFilterLevel.includes(cb) ? setAddFilterLevel(addFilterLevel.filter((typeCamera) => typeCamera !== cb)) : setAddFilterLevel([...addFilterLevel, cb]);
  }

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title&#45;&#45;h5">Уровень</legend>

      {Object.keys(filterLevel).map((level, id) => (
        <div key={id} className="custom-checkbox catalog-filter__item">
          <label>
            <input onChange={ () => {
              checkArr(filterLevel[level]);
            }} type="checkbox" name={level} />
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">{filterLevel[level]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default CatalogFilterLevel;
