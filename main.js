var images = ["Images/family.jpg", "Images/Gabriel_1.jpg", "Images/Gabriel_2.jpg", "Images/Daddy.jpg", "Images/Mummy.jpg"];
var names = ["Family Book", "Gabriel", "Gabriel", "Gabriel with Daddy", "Gabriel with Mummy"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    
        var updatedImage= [images [i]] ;
      //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
