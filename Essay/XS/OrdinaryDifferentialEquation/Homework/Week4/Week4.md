*11612733 杜子豪*

* **2.8——**

* 1.

  Let $Y=y-2,\;T=t-1$, we get $y=Y+2,\;t=T+1$

  $Y'=(T+1)^2+(Y+2)^2,\;Y(0)=0$

  

* 2.

  Let $Y=y-3,\;T=t+1$, we get $y=Y+3,\;t=T-1$

  $Y'=1-(Y+3)^3$

  

* 3.

  * a.

    $y'=f(t,y)=2(y+1)$

    $\partial f/\partial y=2​$, thus it is continuous on the region $(t,y)\in\R​$

    $\phi_1(t)=\int_{0}^{t}2(\phi_0(s)+1)ds=2t$

    $\phi_2(t)=\int_{0}^{t}2(2s+1)ds=2t^2+2t$

    $\phi_3(t)=\int_{0}^{t}2(2t^2+2t+1)=\frac43t^3+2t^2+2t$

    By mathematical induction, assume that $\phi_n(t)=\sum_{i=1}^{n}\frac{2^i}{i!}t^i​$

    1. When $n=1$ the hypothesis is valid obviously

    2. Suppose when $n=k​$ the hypothesis is valid

    3. For $n=k+1$

       $\phi_{k+1}=\int_{0}^{t}2(\phi_k(s)+1)ds=\sum_{i=1}^{k}\frac{2^{i+1}}{(i+1)!}t^{i+1}+2t=\sum_{i=1}^{k+1}\frac{2^i}{i!}t^i$

    Hence $\phi_n(t)=\sum_{i=1}^{n}\frac{2^i}{i!}t^i$

    

* 5.

  * a.

    $y'=f(t,y)=ty+1$

    $\partial f/\partial y=t$, thus it is continuous on the region $(t,y)\in\R$

    $\phi_1(t)=\int_{0}^{t}(t\phi_0(s)+1)ds=t​$

    $\phi_2(t)=\int_{0}^{t}(t^2+1)ds=\frac13t^3+t​$

    $\phi_3(t)=\int_{0}^{t}(\frac13t^4+t+1)=\frac1{15}t^5+\frac13t^3+t$

    By mathematical induction, assume that $\phi_n(t)=\sum_{i=1}^{n}\frac{t^{2n-1}}{(2n-1)!!}​$

    1. When $n=1​$ the hypothesis is valid obviously

    2. Suppose when $n=k​$ the hypothesis is valid

    3. For $n=k+1$

       $\phi_{k+1}=\int_{0}^{t}(s\phi_k(s)+1)ds=\sum_{i=1}^{k}\frac{t^{2i+1}}{(2i+1)!!}+t=\sum_{i=1}^{k+1}\frac{t^{2i-1}}{(2i-1)!!}​$

    Hence $\phi_n(t)=\sum_{i=1}^{n}\frac{t^{2i-1}}{(2i-1)!!}$

  * c.

    $\frac{t^{2n+1}}{(2n+1)!!}\frac{(2n-1)!!}{t^{2n-1}}=\frac{t^2}{2n+1}$

    $\lim_{n\to\infty}\frac{t^2}{2n+1}=0$

    Hence $\{\phi_n(t)\}$ converges

    

* 7.

  * a.

    $y'=f(t,y)=t^2+y^2$

    $\partial f/\partial y=2y​$, thus it is continuous on the region $(t,y)\in\R​$

    $\phi_1(t)=\int_{0}^{t}s^2ds=\frac13t^3$

    $\phi_2(t)=\int_{0}^{t}(s^2+\frac19s^6)ds=\frac1{63}t^7+\frac13t^3$

    $\phi_3(t)=\int_{0}^{t}[s^2+(\frac1{63}s^7+\frac13s^3)^2]ds=\int_{0}^{t}(s^2+\frac1{63^2}s^{14}+\frac19s^6+\frac2{189}s^{10})ds=\frac1{59535}t^{15}+\frac2{2079}t^{11}+\frac1{63}t^7+\frac13t^3$

    

  * $\phi_1(t)=\int()$

* 9.

  * a.

    $y'=f(t,y)=-\sin y+1$

    $\partial f/\partial y=-\cos y$, thus it is continuous on the region $(t,y)\in\R$

    $\phi_1(t)=\int_{0}^{t}ds=t$

    $\phi_2(t)=\int_{0}^{t}(-\sin s+1)ds=\cos t+t$

    

* 11.

  For $0\leq x<1$

  ​	$\forall \epsilon>0​$, let $N=[\log_x\epsilon]+1​$, thus $\forall n>N,\;x^n<\epsilon​$

  ​	Thus $\lim_{n\to\infty}x^n=0$

  For $x=1$, $x^n\equiv1$ for $\forall n\in\N^*$

  

* 12.

  * a.

    Since $n\to\infty​$, $e^{nx^2}\to+\infty​$

    $\lim_{n\to\infty}2nxe^{-nx^2}=\lim_{n\to\infty}2x\frac n{e^{nx^2}}=\lim_{n\to\infty}2x\frac 1{x^2e^{nx}}=0$

  * b.

    $\int_{0}^{1}2nxe^{-nx^2}dx=-\int_{0}^{1}d(e^{-nx^2})=1-e^{-n}$

    Hence $\lim_{n\to\infty}(1-e^{-n})=1$

    

* **Review Problems——**

* 1.

  Let $M(x,y)=x^3-2y,\;N(x,y)=-x$, and suppose the integral factor $\mu>0$ is a function only relative to $x$

  Hence $d\mu/dx=\mu\frac{M_y-N_x}N=\mu\frac{-2+1}{-x}\Rightarrow d(\ln\mu)=d(\ln|x|)$

  Thus let $\mu(x)=x$ we get $\mu M=x^4-2xy,\;\mu N=-x^2$ and $d(\mu M)/dy=-2x=d(\mu N)/dx​$

  $\int(x^4-2xy)dx=\frac15x^5-x^2y+g(y)=\int(-x^2)dy=-x^2y+h(x)$

  Thus let $\phi'(x,y)=\mu Mdx+\mu Ndy=0,\;\phi(x,y)=\frac15x^5-x^2y=c$ where $c$ is an arbitrary constant

  And $y=\frac{x^3}5-\frac c{x^2}$

  

* 2.

  $(1+\cos x)dx=(2-\sin y)dy\Rightarrow x+\sin x=2y +\cos y+c$

  

* 3.

  Let $M(x,y)=2x+y,\;N(x,y)=x-3-3y^2$ thus $Mdx+Ndy=0$

  Since $dM/dy=1=dN/dx$, let $\phi'(x,y)=Mdx+Mdy=0$

  $\int(2x+y)dx=x^2+xy+g(y)=\int(x-3-3y^2)dy=xy-3y-y^3+h(x)​$

  Thus $\phi(x,y)=x^2+xy-3y-y^3=c$ where $c$ is an arbitrary constant

  Substitute $y(0)=0$, $c=0$

  Hence $x^2+xy-3y-y^3=0​$

  

* 4.

  $dy/dx=3(1-2x)+y(1-2x)=(3+y)(1-2x)$

  $\Rightarrow dy/(y+3)=(1-2x)dx\Rightarrow d(\ln|y+3|)=d(x-x^2)$

  $\Rightarrow y=ce^{x-x^2}-3$ where $c$ is an arbitrary constant

  

* 5.

  Let $M(x,y)=2xy+y^2+1,\;N(x,y)=x^2+2xy​$ thus $Mdx+Ndy=0​$

  Since $dM/dy=2x+2y=dN/dx$, let $\phi'(x,y)=Mdx+Mdy=0$

  $\int(2xy+y^2+1)dx=x^2y+xy^2+x+g(y)=\int(x^2+2xy)dy=x^2y+xy^2+h(x)​$

  Thus $\phi(x,y)=x^2y+xy^2+x=c$ where $c$ is an arbitrary constant

  

* 6.

  Suppose $\mu>0$ s.t. $\mu y'+\mu\frac{x+1}xy=(\mu y)'$

  Thus we get some solution that $\mu=xe^x$

  $(xe^xy)'=e^x\Rightarrow y=\frac{e^x+c}{xe^x}$ where $c$ is an arbitrary constant

  Substitute $y(1)=0$ we get $c=-e$

  Hence $y=\frac{1-e^{1-x}}x$

  