//removes unwanted Pilot tabs
remove_course_evaluation();

//poll remove weekly digest while page loads
//interval stops running when the element to be removed is found
var intervalID = setInterval(remove_weekly_digest, 1);

function remove_course_evaluation()
{
    var course_eval = document.querySelector('[aria-labelledby*="d2l_1_0"]');
    course_eval.parentElement.removeChild(course_eval);
}

function remove_weekly_digest()
{
    var weekly_digest = $$$('[text*="CECS Internship and Job Opportunity: Weekly Digest"]');
    if (weekly_digest.length > 0)
    {
        var wd_node = weekly_digest[0].getRootNode().host;
        wd_node.parentElement.removeChild(wd_node);
        clearInterval(intervalID);
    }
}

function $$$(selector, rootNode=document.body) {
    const arr = []
    
    const traverser = node => {
        // 1. decline all nodes that are not elements
        if(node.nodeType !== Node.ELEMENT_NODE) {
            return
        }
        
        // 2. add the node to the array, if it matches the selector
        if(node.matches(selector)) {
            arr.push(node)
        }
        
        // 3. loop through the children
        const children = node.children
        if (children.length) {
            for(const child of children) {
                traverser(child)
            }
        }
        
        // 4. check for shadow DOM, and loop through it's children
        const shadowRoot = node.shadowRoot
        if (shadowRoot) {
            const shadowChildren = shadowRoot.children
            for(const shadowChild of shadowChildren) {
                traverser(shadowChild)
            }
        }
    }
    
    traverser(rootNode)
    
    return arr
}