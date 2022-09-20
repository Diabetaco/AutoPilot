var int_class_image;
var int_profile_img;
var int_big_class_img;
var int_pilot_logo;

switch_to_dark();

function switch_to_dark()
{
    //invert the page hue
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    
    //call again until element loads on page
    int_class_image = setInterval(reinvert_class_image, 1);
    int_profile_img = setInterval(reinvert_profile_image, 1);
    int_big_class_img = setInterval(reinvert_big_class_image, 1);
    int_pilot_logo = setInterval(reinvert_pilot_logo, 1);
}

function reinvert_pilot_logo()
{
  //select class images and re-invert it
  var pilot_logo = $$$('[class="d2l-navigation-link-image-container"]');
  if (pilot_logo.length > 0)
  {
    pilot_logo.forEach((pilot_logo_item) => {
        pilot_logo_item.style.filter = "invert(1) hue-rotate(180deg)"
    })
    clearInterval(pilot_logo);
  }
}

function reinvert_big_class_image()
{
  //select class images and re-invert it
  var class_image = $$$('[class="d2l-course-banner-container"]');
  if (class_image.length > 0)
  {
    class_image.forEach((class_image_item) => {
      class_image_item.style.filter = "invert(1) hue-rotate(180deg)"
    })
    clearInterval(int_big_class_image);
  }
}


function reinvert_profile_image()
{
  //select profile image and re-invert it
  var profile_image = $$$('[class="d2l-navigation-s-personal-menu-wrapper"]');
  if (profile_image.length > 0)
  {
    profile_image.forEach((profile_image_item) => {
        profile_image_item.style.filter = "invert(1) hue-rotate(180deg)"
    })
    clearInterval(int_profile_img);
  }
}

function reinvert_class_image()
{
  //select class images and re-invert it
  var class_image = $$$('[class="d2l-enrollment-card-image-container"]');
  if (class_image.length > 0)
  {
    class_image.forEach((class_image_item) => {
      class_image_item.style.filter = "invert(1) hue-rotate(180deg)"
    })
    clearInterval(int_class_image);
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
