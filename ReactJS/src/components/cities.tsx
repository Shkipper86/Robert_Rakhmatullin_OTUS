import * as React from 'react'


class City extends React.Component {
        
      render() {
        return (
            <form>
            <label>
              Выберите город:&nbsp;
              <select >
                  <option value="msk">Москва</option>
                  <option value="spb">Санкт-Петербург</option>
                  <option value="krd">Краснодар</option>
                  <option value="ufa">Уфа</option>
              </select> &nbsp;
            </label>
            <input  type="submit" value="В избранные" /><br/>
            <input  type="submit" value="Показать прогноз погоды" />
            </form>
        );

      }
}

export default City;