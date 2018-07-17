/**
 * @file mofron-event-xxx/index.js
 * @author simpart
 */

/**
 * @class mofron.event.xxx
 * @brief xxxx event class for component
 */
mofron.event.xxx = class extends mofron.Event {
    
    constructor (po, p2) {
        try {
            super();
            this.name('xxx');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.xxx;
/* end of file */
