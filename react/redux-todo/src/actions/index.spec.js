import AddTodo from './index'

test('Create addtodo action', ()=>{
    expect(AddTodo("Create action")).toStrictEqual({
        type: 'ADD_TODO',
        text: 'Create action'
    });
});