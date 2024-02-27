import { Component , Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [ RouterModule , CommonModule ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  menuItems = [
    {
      id: 1,
      name: 'item1',
      parentID: null,
      children:[
        {
        id: 6,
        name: 'item1.1',
        parentID: 1,
        children:[
          {
            id: 16,
            name: 'item1.1.1',
            parentID: 6,
            children:[]
          }
        ]
      }
    ]
    },
    {
      id: 2,
      name: 'item2',
      parentID: null,
      children:[]
    },
    {
      id: 3,
      name: 'item3',
      parentID: null,
      children:[
        {
          id: 7,
          name:'item3.1',
          parentID: 3,
          children:[
            {
              id: 9,
              name: 'items3.1.1',
              parentID: 7,
              children:[
                {
                  id: 10,
                  name: 'item3.1.1.1',
                  parentID: 9,
                  children:[]
                },
                {
                  id: 11,
                  name: 'item3.1.1.2',
                  parentID: 9,
                  children:[
                    {
                      id: 12,
                      name: 'item3.1.1.2.1',
                      parentID: 11,
                      children:[]
                    },
                    {
                      id: 13,
                      name: 'item3.1.1.2.2',
                      parentID: 11,
                      children:[
                        {
                          id: 14,
                          name: 'item3.1.1.2.2.1',
                          parentID:13 ,
                          children:[]
                        },
                        {
                          id: 15,
                          name: 'item3.1.1.2.2.2',
                          parentID: 13,
                          children:[]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]

        },
        {
          id: 8,
          name:'item3.2',
          parentID: 3,
          children:[
            {
              id: 17,
              name: 'item3.2.1',
              parentID: 8,
              children:[]
            }
          ]
        }
      ]

    },
    {
      id: 4,
      name: 'item4',
      parentID: null,
      children:[]
    },
    {
      id: 5,
      name: 'item5',
      parentID: null,
      children:[]
    }
  ];


  list:any = [];
  lenght: any = [];
  children: any = [];

  toggleChildren(id: number,i:any){
    
    if (this.menuItems[id-1].parentID === null && this.list.length > 1){
      
      const lenght = this.list.length
      for (let i = 0; i < lenght ; i++){
        this.list.pop(0);
        this.lenght.pop(0);
      }
      
    }  
    this.list.push([this.menuItems]);
    this.list.push([this.menuItems[id-1].children]); 
    this.lenght.push(0);
    this.children = this.list[1];
    
  }

 // i is my row 
 //index is my column
  Children(id: number , index: any , i: any){
    console.log(this.list);
    
    const temp = this.list.length;

    if (this.list[index+1][0][i].id == id) {
        
      for (let i = 0; i < temp - index -2; i++) {
        this.children.pop(index+2);
        this.list.pop(index+1);
        
        for (let j = 1; j < temp - index -1; j++) {
          this.lenght.pop(index);
          
        }
      }
    }

  const idChild = this.list[index+1][0][i].id;

  if (id == idChild) {
    this.list.push(this.list[index+1][0][i].children);
    this.children.push(this.list[index+2]);

    for (let j = 1; j < this.children.length; j++) {
      this.lenght.push(j);
          
    }
  }
  // else if(id === this.list[index+1][0].id){
  //   console.log("miaii inja?");
    
  //   this.list.push(this.list[index+1][0].children);
  //   this.children.push(this.list[index+2]);
        
  //   for (let j = 1; j < this.children.length; j++) {
  //     this.lenght.push(j);
          
  //   }
  // }
           
  }

}
  
