/**
 * @file mofron-event-dev/index.js
 * @brief event module template for developper
 * @license MIT
 */
module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) 
     *                key-value: event config
     * @short
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name("");     // please set module name
	    this.shortForm();  // please set short form parameter name
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    /**
     * event contents
     * 
     * @param (mofron.class.dom) target dom object
     * @type private
     */
    contents (dom) {
        try {
            /* event contents */
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
