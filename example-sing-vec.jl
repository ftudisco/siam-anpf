using LinearAlgebra

function power_method(A,α,β)
    maxiter = 100;
    n = size(A,1)
    x = ones(n,1)
    y = ones(n,1)
    
    for i = 1:maxiter 
        x = A'*(y.^α)
        x = x ./ norm(x,1)
        y = A*(x.^β)
        y = y ./ norm(y,1)
    end
    
    return vec(x),vec(y)
end

A = [0 0 0 0 0 0; 
     1 0 0 0 0 0; 
     1 0 0 0 0 0; 
     1 0 0 0 0 0; 
     1 0 0 0 0 0; 
     0 1 1 1 1 0]

α = .5; β = .5; x1,y1 = power_method(A,α,β)
α = .9; β = .9; x2,y2 = power_method(A,α,β)
α = .5; β = .9; x3,y3 = power_method(A,α,β)
α = .9; β = .5; x4,y4 = power_method(A,α,β)


df = DataFrame(x1 = x1, x2 = x2, x3 = x3, x4 = x4, y1 = y1, y2 = y2, y3 = y3, y4 = y4)
println(df)
