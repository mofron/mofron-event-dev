/**
 * @file mofron-event-dev/index.js
 * @author simpart
 */

/**
 * @class mofron.event.xxx
 * @brief click event class for component
 */
mofron.event.xxx = class extends mofron.Event {
    
    constructor (po, p2) {
        try {
            super(po, p2);
            this.name('xxx');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    eventConts (tgt_dom) {
        try {
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.xxx;
/* end of file */
