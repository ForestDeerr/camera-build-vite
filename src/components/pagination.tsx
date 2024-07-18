import { useState } from 'react';

type paginationProps = {
  setPagination: (isActive: number) => void;
  pagination: number;
  diplayedCameras: [];
}


function Pagination({pagination, setPagination, diplayedCameras}: paginationProps): JSX.Element {
  const paginationCameras = [...diplayedCameras];

  const [activeIndex, setActiveIndex] = useState(0);

  // Обработчик клика
  const handleItemClick = (index) => {
    setActiveIndex(index);
    setPagination((index + 1) * 9);
  };


  function mapCameras (i) {
    const ar = [];
    const arr = [];
    paginationCameras.forEach((valye, index)=>{
      if (index >= i && index <= i + 8) {
        return arr.push(valye);
      }
    });
    return [...ar, arr];
  }
  const ffff = mapCameras ();

  function sum () {
    const arr = [];
    for (let i = 0; i <= paginationCameras.length; i = i + 9) {
      const bbb = i;
      arr.push(mapCameras(bbb));
    }
    return arr;
  }
  const df = sum ();


  function fff (index) {
    setPagination((index + 1) * 9);
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item"><a className="pagination__link pagination__link&#45;&#45;text" href="#">Назад</a>
        </li>
        {df.map((valye, index)=>{
          if (index < 6) {
            return (
              <li key={index} className="pagination__item" >
                <a onClick={() => handleItemClick(index)}
                  className={activeIndex === index ? 'pagination__link pagination__link--active' : 'pagination__link active'}
                >{index + 1}
                </a>
              </li>
            );
          }

        }
        )}

        <li className="pagination__item" ><a className="pagination__link pagination__link&#45;&#45;text" href="#">Далее</a>
        </li>
      </ul>
    </div>);
}

export default Pagination;
