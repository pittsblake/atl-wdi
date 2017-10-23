@a = true
@b = false


def test
    if @b == false 
    @a = false
    puts @a
    end
end

test

def test2 
    if @a == true 
        @b = true
        puts @b
    end
end

test2

:dart Commit -m "1. Boolean Skills"