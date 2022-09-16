var course_eval = document.querySelector('[aria-labelledby*="d2l_1_0"]');
course_eval.parentElement.removeChild(course_eval);

var intervalID = setInterval(remove_weekly_digest, 1);

function remove_weekly_digest()
{
   var weekly_digest = $$$('[href="https://b893732b-5aab-4130-b167-8e7cf9976e8c.enrollments.api.brightspace.com/enrolled-user/OM4aoQsbO1_7dBs2ld7u_ssfyXg5xzHA0sZW6Wtovnc/enrollment"]');
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
            node.parentElement.removeChild(node)
            clearInterval(intervalID)
            //arr.push(node)
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