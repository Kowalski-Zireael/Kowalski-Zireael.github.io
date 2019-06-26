*11612733 杜子豪*

* **Review Problems——**

* 7.

  Multiple both sides by $\mu(x)>0$

  Thus $\mu xy'+2\mu y=\mu \sin x/x\Rightarrow\mu y'+(2\mu/x)y=\mu\sin x/x^2$

  Suppose $\mu y'+(2\mu/x)y=(\mu y)'$ we can let $\mu=x^2$

  It follows that $(x^2y)'=\sin x\Rightarrow y=\frac{c-\cos x}{x^2}$ where $c$ is an arbitrary constant

  Substitute $y(2)=1$, we get $c=4+\cos2$

  Hence $y=\frac{4+\cos2-\cos x}{x^2}​$

  

* 8.

  Let $M(x,y)=2xy+1,\;N(x,y)=x^2+2y$, thus $Mdx+Ndy=0$

  Since $dM/dy=2x,\;dN/dx=2x$, this equation is exact

  $\int(2xy+1)dx=x^2y+x+g(y)=\int(x^2+2y)dy=x^2y+y^2+h(x)$

  Thus let $\phi'(x,y)=Mdx+Ndy=0$, $\phi(x,y)=x^2y+x+y^2=c$ where $c$ is an arbitrary constant

  

* 9.

  

* 10.

  Let $M(x,y)=x^2+y,\;N(x,y)=x+e^y$, thus $Mdx+Ndy=0$

  Since $dM/dy=1,\;dN/dx=1$, this equation is exact

  $\int(x^2+y)dx=\frac13x^3+xy+g(y)=\int(x+e^y)dy=xy+e^y+h(x)$

  Thus let $\phi'(x,y)=Mdx+Ndy=0$, $\phi(x,y)=xy+\frac13x^3+e^y=c$ where $c$ is an arbitrary constant

  

* 11.

  Let $M(x,y)=x+y,\;N(x,y)=x+2y$, thus $Mdx+Ndy=0$

  Since $dM/dy=1,\;dN/dx=1$, this equation is exact

  $\int(x+y)dx=\frac12x^2+xy+g(y)=\int(x+2y)dy=xy+y^2+h(x)$

  Thus let $\phi'(x,y)=Mdx+Ndy=0$, $\phi(x,y)=\frac12x^2+xy+y^2=c$ where $c$ is an arbitrary constant

  Substitute $y(2)=3$, we get $c=17$ 

  Hence $\frac12x^2+xy+y^2=17$

  

* 12.

  

* **Part 2——**

* 1.

  Since $f(x,y)$ is continues on R, $\forall\epsilon>0,\exist\delta>0,\forall y\in R, |y-y_0|<\delta,|f(x,y)-f(x,y_0|<\epsilon​$

  Since $\phi_n(x)$ converges uniformly to $\phi(x)$, 

  $\forall\epsilon>0,\exist N\in\N^*,for\;n>N,\forall x\in R, |\phi_n(x)-\phi(x)|<\epsilon$

  Thus $\forall\epsilon>0,\forall\delta>0,\exist N(\delta)\in\N^*, for\;n>N(\delta),\forall x\in R,|\phi_n(x)-\phi(x)|<\delta​$

  It follows that $\exist\delta_0>0$, since $|\phi_n(x)-\phi(x)|<\delta_0$ for all $n>some\;N,|f(x,\phi_n(x))-f(x,\phi(x))|<\epsilon$

  Hence $f(x,\phi_n(x))$ converges uniformly to $\phi(x)$

  

* 2.

  Can’t. 

  Since by step 1 construction of Euler’s polugonal line, they are not equivalent

  And the lack of Lipschitz condition makes the iterator fail, since each iterator cannot ensure the region being smaller or equal

  

* 3.

  $L=\max_{(x,y\in R)}|2y|=2,M=\max_{(x,y)\in R}|x^2+y^2|=2,h=1/2$

  Thus solving $ML^nh^{n+1}/(n+1)!=1/(n+1)!<0.05$, we get $n\geq3$

  Thus $\phi_1(x)=\frac13x^3$, $\phi_2(x)=\frac1{63}x^7+\frac13x^3$, $\phi_3(x)=\frac1{59535}x^{15}+\frac1{63}x^7+\frac13x^3$

  

* 4.

  * 1.

    f(x,y) is continuous on $(x,y)\in\R^2$

    $dy/(y(y-1))=dx\Rightarrow(\frac1{y-1}-\frac1y)dy=dx\Rightarrow d\ln|\frac{y-1}{y}|=dx$

    Thus $y=\frac1{1-ce^x}$ where $c$ is an arbitrary constant or $y=0$

    Suppose $y(x_0)=y_0$ is a initial point

    If $y_0\not=0,c=e^{-x_0}(1-\frac1{y_0}),y(x)=\frac1{1-e^{x-x_0}(1-\frac1{y_0})}$

    ​	Let $1-e^{x-x_0}(1-\frac1{y_0})=0​$

    ​	We get $x=\ln(\frac{y_0}{y_0-1})+x_0​$, if $y_0\in(-\infty,0)\cup(1,+\infty)​$

    ​	     or $1-e^{x-x_0}(1-\frac1{y_0})>0$, if $y_0\in(0,1]$   

    Hence 

    $y_0\in(-\infty,0)\cup(1,+\infty)$, the maximum existance interval is $(-\infty,\ln(\frac{y_0}{y_0-1})+x_0)$ or 

    ​												$(\ln(\frac{y_0}{y_0-1})+x_0,+\infty)$

    $y_0\in[0,1]$, the maximum existance interval is $\R$

    

  * 2.

    