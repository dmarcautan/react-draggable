import Draggable from './Draggable';
import DraggableCore from './DraggableCore';
import PositionedDraggable from './PositionedDraggable';

// Previous versions of this lib exported <Draggable> as the root export. As to not break
// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266
Draggable.default = Draggable;
Draggable.DraggableCore = DraggableCore;
Draggable.PositionedDraggable = PositionedDraggable;

export default Draggable;
