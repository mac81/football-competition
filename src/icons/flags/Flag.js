import React from 'react';
import eg from './svg/eg.svg';
import ru from './svg/ru.svg';
import sa from './svg/sa.svg';
import uy from './svg/uy.svg';
import ir from './svg/ir.svg';
import ma from './svg/ma.svg';
import pt from './svg/pt.svg';
import es from './svg/es.svg';
import au from './svg/au.svg';
import dk from './svg/dk.svg';
import pe from './svg/pe.svg';
import fr from './svg/fr.svg';
import ar from './svg/ar.svg';
import is from './svg/is.svg';
import hr from './svg/hr.svg';
import ng from './svg/ng.svg';
import cr from './svg/cr.svg';
import rs from './svg/rs.svg';
import br from './svg/br.svg';
import ch from './svg/ch.svg';
import kr from './svg/kr.svg';
import mx from './svg/mx.svg';
import de from './svg/de.svg';
import se from './svg/se.svg';

const Flag = props => {
  const {id} = props;
  return <img style={{maxWidth: '40px', maxHeight: '40px'}} src={flags[id]} alt="" />;
};

const flags = (Flag.flags = {
  15117: eg,
  15119: ru,
  15120: sa,
  15118: uy,
  15098: ir,
  15097: ma,
  15099: pt,
  15100: es,
  15121: au,
  15122: pe,
  15123: dk,
  15124: fr,
  15105: ar,
  15106: is,
  15107: hr,
  15108: ng,
  15157: cr,
  15158: rs,
  15159: br,
  15160: ch,
  15093: kr,
  15094: mx,
  15095: de,
  15096: se,
});

export default Flag;
